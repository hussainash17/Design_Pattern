package Iterator;

import java.util.ArrayList;

public class main {
    public static void main(String argv[]){
        PancakeHouseMenu pancakeHouseMenu = new PancakeHouseMenu();
        ArrayList<MenuItem> breakfastItems = pancakeHouseMenu.getMenuItems();

        DinerMenu dinerMenu = new DinerMenu();
        MenuItem[] dinnerItems = dinerMenu.getMenuItems();

        for(MenuItem menuItem: breakfastItems){
            System.out.println(menuItem.getName());
        }

        for(MenuItem menuItem: dinnerItems){
            System.out.println(menuItem.getName());
        }
    }
}
