function dilithiumUpdate(user, dilithiumAmount) {
    if(dilithiumAmount !== 0) {
        user.dilithium += dilithiumAmount;
        return user;
    }
}

export default dilithiumUpdate;