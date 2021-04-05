package Duck;

public class NewModelDuck extends Duck{
    public NewModelDuck(){
        flyBehavior = new FlyNoWay();
        quackBehavior = new Quack();
    }

    @Override
    public String toString() {
        return "NewModelDuck{" +
                "flyBehavior=" + flyBehavior +
                '}';
    }

    @Override
    public void display() {
        System.out.println("Displaying.. new model duck");
    }
}
