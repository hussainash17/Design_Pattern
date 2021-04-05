package Duck;

public class FlyRocketPowered implements FlyBehavior{
    @Override
    public void fly() {
        System.out.println("Flying with rocket power");
    }

    @Override
    public int rarray() {
        return 230;
    }
}
