
pub fn binary_gap(n: i32) -> i32 {
    let mut longest_distance: i32 = 0;
    let mut running_distance: i32 = 0;
    let mut input: i32 = n;

    loop {
        if input & 1 == 1 {
            input >>= 1;
            break;
        }

        input >>= 1;
    }

    while input > 0 {
        if input & 1 == 0 {
            running_distance += 1;
        } else {
            longest_distance = std::cmp::max(running_distance + 1, longest_distance);
            running_distance = 0;
        }
        
        input >>= 1;
    }

    return longest_distance;
}

fn main(){
    println!("{} ", binary_gap(8));
    println!("{} ", binary_gap(22));
    println!("{} ", binary_gap(5));
    println!("{} ", binary_gap(6));
    println!("{} ", binary_gap(3));
}
