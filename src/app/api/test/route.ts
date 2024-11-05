import pkg from 'bitcoinjs-lib'
import * as bitcoinMessage from 'bitcoinjs-message'

export const GET = async() => {
    var keyPair = pkg.ECPair.fromWIF('L4rK1yDtCWekvXuE6oXD9jCYfFNV2cWRpVuPLBcCU2z8TrisoyY1')
    console.log('keypair created', keyPair)
    const privateKey = keyPair.privateKey
    console.log('private key', privateKey)
    if (privateKey) {
        const message = 'hello'
        var signature = bitcoinMessage.sign(message, privateKey, keyPair.compressed)
        console.log(signature.toString('base64'))

        return Response.json({ signature: signature.toString('base64') })
    }

    return Response.json({ signature: 'yo' })
}