import java.util.Arrays;


public class TwoSum {
    public int[] twoSum(int[] nums, int target) {
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    int[] result = new int[]{i, j};
                    return result;
                }
            }
        }
        return null;
    }

    public static void main(String[] args) {
        TwoSum twoSum = new TwoSum();
        int[] nums = new int[]{2, 5, 6, 7, 8, 9, 1};
        int target = 11;
        int[] result = twoSum.twoSum(nums, target);
        if (result != null) {
            System.out.println("Array of indexes of nums,whose sum is target: " + Arrays.toString(result));
        } else {
            System.out.println("No solution found.");
        }
    }
} 