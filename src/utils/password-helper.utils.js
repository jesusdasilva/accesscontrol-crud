import bcrypt from 'bcryptjs'
import _ from 'lodash'

export async function encrypt(password) {
    password = _.isString(password) ? password : Object.toString(password)

    const salt = bcrypt.genSaltSync(10)
    const encrypted = await bcrypt.hash(password, salt)

    return encrypted
}

export async function compare(password, hash) {
    
    return  await bcrypt.compare(password, hash)
}