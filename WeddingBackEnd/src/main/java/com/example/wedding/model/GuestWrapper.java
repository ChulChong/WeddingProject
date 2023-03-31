package com.example.wedding.model;

import java.util.List;

public class GuestWrapper {
    private List<Guests> guests;

    /**
     * @return the guests
     */
    public List<Guests> getGuests() {
        return guests;
    }

    /**
     * @param guests the persons to set
     */
    public void setGuests(List<Guests> guests) {
        this.guests = guests;
    }
}

