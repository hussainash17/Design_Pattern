package Iterator;

import java.util.ArrayList;

public class PancakeHouseMenu {
    ArrayList<MenuItem> menuItems;

    public PancakeHouseMenu() {
        menuItems = new ArrayList<MenuItem>();
        addItem("First", "First Item", true, 12.4);
        addItem("Second", "Second Item", false, 14.4);
        addItem("Third", "Third Item", true, 43.4);
        addItem("Fourth", "Fourth Item", false, 12.4);
    }

    public void addItem(String name, String description, boolean veg, double price){
        MenuItem menuItem = new MenuItem(name, description, veg, price);
        menuItems.add(menuItem);
    }

    public ArrayList<MenuItem> getMenuItems(){
        return menuItems;
    }
}
