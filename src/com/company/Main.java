package com.company;

import java.util.Scanner;

public class Main {
    private static Scanner scan = new Scanner(System.in);
    public static void main(String[] args) {
        int value = scan.nextInt();
        int[] arr = getArray(value);
        int[] arr1 = sortArray(arr);
        printArray(arr1);
    }

    public  static  void printArray(int[] arr) {
        for(int i = 0; i < arr.length; i++){
            System.out.println(arr[i]);
        }
    }

    public static int[] sortArray(int[] arr){
        int[] sortedArr = new int[arr.length];
        for(int i = 0; i < sortedArr.length; i++){
            sortedArr[i] = arr[i];
        }
        return  sortedArr;
    }

    public  static  int[] getArray(int num){
        int[] values = new int[num];
        for(int i = 0; i < values.length; i++){
            values[i] = scan.nextInt();
        }
        return values;
    }
}
