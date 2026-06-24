package com.lms.test;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/")
    public String home() {
        return "LMS Backend Running Successfully";
    }

    @GetMapping("/test")
    public String test() {
        return "Test API Working";
    }
}

