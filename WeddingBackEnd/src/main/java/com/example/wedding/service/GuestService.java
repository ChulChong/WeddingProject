package com.example.wedding.service;

import com.example.wedding.model.Guests;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.CollectionReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.QuerySnapshot;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class GuestService {
    public List<Guests> getAllGuests() throws ExecutionException, InterruptedException {
        Firestore db = FirebaseInitializer.getFirebase();
        List<Guests> GuestsList = new ArrayList<>();
        CollectionReference guests = db.collection("Guests");
        ApiFuture<QuerySnapshot> future = guests.get();
        for (DocumentSnapshot doc : future.get().getDocuments()) {
            Guests guests1 = doc.toObject(Guests.class);
            GuestsList.add(guests1);
        }
        return GuestsList;
    }

    public String addGuests(@RequestBody Guests Guests) {
        Firestore db = FirebaseInitializer.getFirebase();
        CollectionReference guests = db.collection("Guests");
        guests.document(Guests.getName()).set(Guests);
        return Guests.getName();
    }

    public String nameFormatter(String submittedInput) {
        StringBuilder sb = new StringBuilder();
        char[] arr = submittedInput.replaceAll("\"", "").toCharArray();
        arr[0] = Character.toUpperCase(arr[0]);
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == ' ') {
                arr[i + 1] = Character.toUpperCase(arr[i + 1]);
            }
            sb.append(arr[i]);
        }
        return sb.toString();
    }

    public boolean nameMatchFinder(List<Guests> guestsList, String submittedInput) {
        for (Guests guests : guestsList) {
            if (submittedInput.equalsIgnoreCase(guests.getName())) {
                return true;
            }
        }
        return false;
    }

    public Guests updateGuest(@RequestBody Guests Guests) {
        Firestore db = FirebaseInitializer.getFirebase();
        CollectionReference guest = db.collection("Guests");
        guest.document(Guests.getName()).set(Guests);
        return Guests;
    }
}
