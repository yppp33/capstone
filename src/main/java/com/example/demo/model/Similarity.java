package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "SIMILARITY")
public class Similarity {
    @Id
    private Long id;
    private Long top1;
    private Long top2;
    private Long top3;
    private Long top4;
    private Long top5;
    private Long top6;
    private Long top7;
    private Long top8;
    private Long top9;
    private Long top10;
    private Long top11;
    private Long top12;
    private Long top13;
    private Long top14;
    private Long top15;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getTop1() {
        return top1;
    }

    public void setTop1(Long top1) {
        this.top1 = top1;
    }

    public Long getTop2() {
        return top2;
    }

    public void setTop2(Long top2) {
        this.top2 = top2;
    }

    public Long getTop3() {
        return top3;
    }

    public void setTop3(Long top3) {
        this.top3 = top3;
    }

    public Long getTop4() {
        return top4;
    }

    public void setTop4(Long top4) {
        this.top4 = top4;
    }

    public Long getTop5() {
        return top5;
    }

    public void setTop5(Long top5) {
        this.top5 = top5;
    }

    public Long getTop6() {
        return top6;
    }

    public void setTop6(Long top6) {
        this.top6 = top6;
    }

    public Long getTop7() {
        return top7;
    }

    public void setTop7(Long top7) {
        this.top7 = top7;
    }

    public Long getTop8() {
        return top8;
    }

    public void setTop8(Long top8) {
        this.top8 = top8;
    }

    public Long getTop9() {
        return top9;
    }

    public void setTop9(Long top9) {
        this.top9 = top9;
    }

    public Long getTop10() {
        return top10;
    }

    public void setTop10(Long top10) {
        this.top10 = top10;
    }

    public Long getTop11() {
        return top11;
    }

    public void setTop11(Long top11) {
        this.top11 = top11;
    }

    public Long getTop12() {
        return top12;
    }

    public void setTop12(Long top12) {
        this.top12 = top12;
    }

    public Long getTop13() {
        return top13;
    }

    public void setTop13(Long top13) {
        this.top13 = top13;
    }

    public Long getTop14() {
        return top14;
    }

    public void setTop14(Long top14) {
        this.top14 = top14;
    }

    public Long getTop15() {
        return top15;
    }

    public void setTop15(Long top15) {
        this.top15 = top15;
    }
}
