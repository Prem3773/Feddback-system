import java.util.Scanner;
public class Property {
        public static void main (String[] args ){
            Scanner obj = new Scanner(System.in);
            int int_walls = obj.nextInt();
            int ext_walls = obj.nextInt();
            double total_cost = 0;
            for (int =0 ; i<int_walls;i++){
             double temp = obj.nextDouble();
             total_cost +=( temp*10);

        }
         for (int =0 ; i<ext_walls;i++){
             double temp = obj.nextDouble();
             total_cost +=( temp*12);
    }
    System.out.Println("Total estimated cost : "+ total_cost+ "INR");
    obj.close();
}

         
     
}