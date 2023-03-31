package com.example.wedding.service;

import com.example.wedding.model.Guests;

import java.util.List;

public class NameMatchFinder {


    public static boolean nameMatchFinder(List<Guests> guestsList, String submittedInput) {

        for (Guests guests : guestsList) {
            if (submittedInput.equalsIgnoreCase(guests.getName())) {
                return true;
            }
        }

        return false;
    }
}
