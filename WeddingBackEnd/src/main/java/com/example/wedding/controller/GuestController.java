package com.example.wedding.controller;

import com.example.wedding.model.Guests;
import com.example.wedding.service.FirebaseInitializer;
import com.example.wedding.service.NameFormatter;
import com.example.wedding.service.NameMatchFinder;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@CrossOrigin
public class GuestController {

    @GetMapping("/getAllGuests")
    public List<Guests> getAllGuests() throws ExecutionException, InterruptedException {
        List<Guests> GuestsList = new ArrayList<>();
        CollectionReference guests = FirebaseInitializer.getFirebase().collection("Guests");
        ApiFuture<QuerySnapshot> future = guests.get();
        for (DocumentSnapshot doc : future.get().getDocuments()) {
            Guests guests1 = doc.toObject(Guests.class);
            GuestsList.add(guests1);
        }
        return GuestsList;
    }

    @PostMapping("/IsGuestIntheList")
    public boolean IsGuestIntheList(@RequestBody Guests guests) throws ExecutionException, InterruptedException {
        return NameMatchFinder.nameMatchFinder(getAllGuests(), guests.getName());
    }

    @PostMapping("/GuestFormatting")
    public String GuestFormatting(@RequestBody String submittedName) {
        return NameFormatter.nameFormatter(submittedName);
    }

    @PostMapping("/addGuests")
    
    public String addGuests(@RequestBody Guests Guests) {
        CollectionReference guests = FirebaseInitializer.getFirebase().collection("Guests");
        guests.document(Guests.getName()).set(Guests);
        return Guests.getName();
    }

    @PutMapping("/UpdateGuest")
    public Guests updateGuest(@RequestBody Guests Guests) {
        CollectionReference guest = FirebaseInitializer.getFirebase().collection("Guests");
        guest.document(Guests.getName()).set(Guests);
        return Guests;
    }
}

