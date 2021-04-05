package Duck;

public class MiniDuckSimulator{
    public static void main(String[] argv){

        Duck Mallerduck = new MallerDuck();
        Mallerduck.performFly();
        Mallerduck.performQuack();
        Mallerduck.display();
        Mallerduck.swim();
        Mallerduck.performArray();
        System.out.println("...........................");
        Duck modelDuck = new NewModelDuck();
        modelDuck.performFly();
        modelDuck.setFlyBehavior(new FlyRocketPowered());
        modelDuck.performFly();
        modelDuck.performArray();

    }
}
