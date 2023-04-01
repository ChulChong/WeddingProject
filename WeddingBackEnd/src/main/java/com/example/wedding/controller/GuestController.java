package com.example.wedding.controller;

import com.example.wedding.model.Guests;
import com.example.wedding.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@RestController
@CrossOrigin
public class GuestController {

    @Autowired
    GuestService guestService;

    @GetMapping("/getAllGuests")
    public List<Guests> getAllGuests() throws ExecutionException, InterruptedException {
        return guestService.getAllGuests();
    }

    @PostMapping("/IsGuestIntheList")
    public boolean IsGuestIntheList(@RequestBody Guests guests) throws ExecutionException, InterruptedException {
        return guestService.nameMatchFinder(getAllGuests(), guests.getName());
    }

    @PostMapping("/GuestFormatting")
    public String GuestFormatting(@RequestBody String submittedName) {
        return guestService.nameFormatter(submittedName);
    }

    @PostMapping("/addGuests")
    public String addGuests(@RequestBody Guests Guests) {
        return guestService.addGuests(Guests);
    }

    @PutMapping("/UpdateGuest")
    public Guests updateGuest(@RequestBody Guests Guests) {
        return guestService.updateGuest(Guests);
    }
}

