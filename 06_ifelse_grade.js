function voteEligibility(age){

    if(age==null || age==undefined ){
        console.log(`Invalid Input: -->${age}`);

    } else{
        if( (age <=0 || age >=120)){
            console.log(`Invalid Data: -->${age}`);

        }else{
            if(age >=18){
                console.log(`Eligible for vote  :--> ${age}`);
            } else{
                if((age<=0 || age >=21)){
                    console.log(`Invalid Data : -->${age}`);

                } else{
                console.log(`Not Eligible for voting: --> ${age}`);
            
            }
        
        
        }
    }

    }
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(null);
voteEligibility(undefined);








