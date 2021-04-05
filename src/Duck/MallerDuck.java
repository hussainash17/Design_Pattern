package Duck;

public class MallerDuck extends Duck{
    public MallerDuck(){
        quackBehavior = new MuteQuack();
        flyBehavior = new FlyNoWay();
    }
    @Override
    public void display() {
        System.out.println("Displaying.... Mallerduck");
    }
}
