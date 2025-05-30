package com.canteen.canteenbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class CanteenBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(CanteenBackendApplication.class, args);
    }
}
