package com.example.demo.controller;

import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

@Component
public class PythonRecommendationClient {

    private final RestTemplate restTemplate;

    public PythonRecommendationClient() {
        this.restTemplate = new RestTemplate();
        this.restTemplate.getMessageConverters().add(new MappingJackson2HttpMessageConverter());
    }

    public Integer[] getRecommendations(RecommendationRequest request) {
        String url = "http://localhost:5001/recommend";

        ObjectMapper mapper = new ObjectMapper();
        ObjectNode jsonRequest = mapper.createObjectNode();
        jsonRequest.put("gender", request.getGender());
        jsonRequest.put("patron_type", request.getPatronType());
        jsonRequest.put("birthdate", request.getBirthdate());
        jsonRequest.put("department", request.getDepartment());

        return restTemplate.postForObject(url, jsonRequest, Integer[].class);
    }
}
