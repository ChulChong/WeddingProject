package com.example.wedding.model;

import org.springframework.stereotype.Component;

@Component
public class Guests {

    private String menu;
    private String name;
    private String yesorno;


    public String getMenu() {
        return menu;
    }

    public void setMenu(String menu) {
        this.menu = menu;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getYesorno() {
        return yesorno;
    }

    public void setYesorno(String yesorno) {
        this.yesorno = yesorno;
    }
}
