package Assignement;

public class Hamburger {
    private String rollType;
    private String meat;
    private String lettuce;
    private String tomato;
    private String carrot;
    private String souceges;
    private int price;

    public Hamburger(String rollType, String meat, int price) {
        this.rollType = rollType;
        this.meat = meat;
        this.price = price;
    }

    public String getRollType() {
        return rollType;
    }

    public String getMeat() {
        return meat;
    }

    public String getLettuce() {
        return lettuce;
    }

    public String getTomato() {
        return tomato;
    }

    public String getCarrot() {
        return carrot;
    }

    public String getSouceges() {
        return souceges;
    }

    public int getPrice() {
        return price;
    }
}
