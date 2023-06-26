import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

export async function findAll(){
  const jsonValue = await AsyncStorage.getItem('@contatos')

  if(jsonValue != null)
    return JSON.parse(jsonValue)
  else
    return []

}

export async function insert(contact){
  contact.id = uuid.v4()

  const contatos = await findAll()
  contatos.push(contact)



  const jsonValue = JSON.stringify(contatos)
  await AsyncStorage.setItem('@contatos', jsonValue)

  return contact
}

export async function update(contact){
  const contatos = await findAll()
  const updateContact = contatos.find(c => c.id === contact.id)

  updateContact.tipo = contact.tipo
  updateContact.nome = contact.nome
  updateContact.telefone = contact.telefone

  const jsonValue = JSON.stringify(contatos)
  await AsyncStorage.setItem('@contatos', jsonValue)

  return updateContact
}

export async function removeById(id){
  const contatos = await findAll()

  const contatosFiltered = contatos.filter(c => c.id !== id)

  const jsonValue = JSON.stringify(contatosFiltered)
  await AsyncStorage.setItem('@contatos', jsonValue)

  return {
    id
  }
}