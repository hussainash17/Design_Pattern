package Duck;

public class FlyNoWay implements FlyBehavior{
    @Override
    public void fly() {
        System.out.println("I can't fly");
    }

    @Override
    public int rarray() {
        return 2340;
    }
}
