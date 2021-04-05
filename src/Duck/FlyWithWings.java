package Duck;

public class FlyWithWings implements FlyBehavior{
    @Override
    public void fly() {
        System.out.println("I am flying");
    }

    @Override
    public int rarray() {
        return 23;
    }
}
