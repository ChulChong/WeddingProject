package com.example.wedding.service;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.FileInputStream;
import java.io.IOException;

@Service
public class FirebaseInitializer {

    @PostConstruct
    private void initDB() throws IOException {
        FileInputStream serviceAccount =
                new FileInputStream("src/main/resources/wedding-1f158-firebase-adminsdk-k9e65-8a940aeeb4.json");

        FirebaseOptions options = new FirebaseOptions.Builder()
                .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                .setDatabaseUrl("https://wedding-1f158-default-rtdb.firebaseio.com")
                .build();

        FirebaseApp.initializeApp(options);
    }

    public static Firestore getFirebase() {
        return FirestoreClient.getFirestore();
    }
}
