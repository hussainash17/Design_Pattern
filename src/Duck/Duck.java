package Duck;

public abstract class Duck {
    FlyBehavior flyBehavior;
    QuackBehavior quackBehavior;

    public void setFlyBehavior(FlyBehavior fb) {
        flyBehavior = fb;
    }

    public void setQuackBehavior(QuackBehavior qb) {
        quackBehavior = qb;
    }

    public abstract void display(); // need to implement eveyone

    public void performFly(){
        flyBehavior.fly();
    }

    public void performArray(){
        System.out.println(flyBehavior.rarray());
    }

    public void performQuack(){
        quackBehavior.quack();
    }

    public void swim(){
        System.out.println("All the ducks are floating");
    }
}
