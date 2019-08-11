function createSecretHolder(secret) {
    return {
      getSecret: () => secret,
      setSecret: new_secret => secret = new_secret
    }
}