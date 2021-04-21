package Iterator;

public class DinerMenu {
    static  final  int MAX_ITEMS = 6;
    int NumberOfItems = 0;
    MenuItem[] menuItems;

    public DinerMenu() {
        menuItems = new MenuItem[MAX_ITEMS];
        addItem("First", "First Item", true, 12.4);
        addItem("Second", "Second Item", false, 14.4);
        addItem("Third", "Third Item", true, 43.4);
        addItem("Fourth", "Fourth Item", false, 12.4);
    }

    public void addItem(String name, String description, boolean veg, double price){
        try {
            MenuItem menuItem = new MenuItem(name, description, veg, price);
            if(NumberOfItems >= MAX_ITEMS){
                System.out.println("Sorry, menu is full");
            }else {
                menuItems[NumberOfItems] = menuItem;
                NumberOfItems = NumberOfItems + 1;
            }
        }catch (NullPointerException e){
            System.out.println("Ex");
        }
    }

    public MenuItem[] getMenuItems(){
        return menuItems;
    }
}
