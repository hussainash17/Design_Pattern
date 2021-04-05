package ash;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.Scanner;

public class Array {
    public static Scanner sc = new Scanner(System.in);
    public static void main(String[] args){
        int count = sc.nextInt();
        int[] arr1 = new int[count];
        arr1 = readInteger(count);
        System.out.println(Arrays.toString(arr1));
        int minVal = findMin(arr1);
        System.out.println(minVal);
        System.out.println(Arrays.toString(reverseArray(arr1)));
    }

    public static int[] readInteger(int count){
        int[] arr = new int[count];
        for(int i = 0; i < count; i++){
            arr[i] = sc.nextInt();
        }
        return arr;
    }

    public static int findMin(int[] arr){
        int min = Integer.MAX_VALUE;
        for(int i = 1; i < arr.length; i++){
            if(arr[i] < min){
                min = arr[i];
            }
        }
        return min;
    }

    public static int[] reverseArray(int[] arr){
        int[] reverseArray = new int[arr.length];
        for(int i = arr.length - 1,j = 0; i >= 0; i--,j++){
            reverseArray[j] = arr[i];
        }
        return  reverseArray;
    }

    private ArrayList<String> aList = new ArrayList<String>();

    private LinkedList<String> linkedList = new LinkedList<String>();

}
