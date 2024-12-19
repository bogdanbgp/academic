package com.example.academic.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class FrontendController {

    @RequestMapping("/{path:[^\\.]*}")
    public String forwardReactRoutes() {
        return "forward:/index.html";
    }
}


/**
 * You need a FrontendController in both projects if:
 *
 * Your React app uses React Router for navigation (i.e., you use client-side routing with paths like /dashboard, /profile, etc.).
 * You are serving a single-page application (SPA) with Spring Boot.
 * The reason for this is:
 *
 * React Router handles navigation on the client side.
 * When you refresh a React route in the browser (e.g., /dashboard), the server doesn't know about React's routing and will try to resolve it as a file or endpoint.
 * The FrontendController catches such requests and forwards them to index.html, allowing React to handle routing.
 */