package com.example.wedding.service;

public class NameFormatter {

    public static String nameFormatter(String submittedInput) {

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
}
