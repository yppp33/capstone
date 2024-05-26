package com.example.demo.controller;

import com.fasterxml.jackson.annotation.JsonFormat;

public class RecommendationRequest {

    private String gender;
    private int patronType;
    private int birthdate;
    private String department;

    // Getters and Setters

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public int getPatronType() {
        return patronType;
    }

    public void setPatronType(int patronType) {
        this.patronType = patronType;
    }

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy")
    public int getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(int birthdate) {
        this.birthdate = birthdate;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }
}
