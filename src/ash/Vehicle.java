package ash;

public class Vehicle {
    private  int speed;
    private  boolean handGearing;
    private  int gearValue;

    public int getGearValue() {
        return gearValue;
    }

    public void setGearValue(int gearValue) {
        this.gearValue = gearValue;
    }

    public int getSpeed() {
        return speed;
    }

    public void setSpeed(int speed) {
        this.speed = speed;
    }

    public boolean isHandGearing() {
        return handGearing;
    }

    public void setHandGearing(boolean handGearing) {
        this.handGearing = handGearing;
    }

    public int changeGears(int gearValue){
        return  gearValue--;
    }


}
