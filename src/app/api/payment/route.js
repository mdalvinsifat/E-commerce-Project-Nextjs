import  braintree from "braintree";


export  const GET = () =>{
    try {
        var gateway = new braintree.BraintreeGateway({
            environment: braintree.Environment.Sandbox,
            merchantId: process.env.BRAINETE_MARCHEN_ID,
            publicKey: process.env.BRAINETE_PUBLICKEY_ID,
            privateKey: process.env.BRAINETE_PRIVETKEY_ID 
          });
        
    } catch (error) {
        console.log(error)
    }
}