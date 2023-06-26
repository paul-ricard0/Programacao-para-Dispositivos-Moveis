import React, {useEffect, useState} from 'react';
import {ScrollView, Text,  StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import {Provider, Portal, Dialog, Button, TextInput} from 'react-native-paper'

import Card from './Card'
// import {findAll, removeById, insert, update} from './ContactsApi'
import {findAll, removeById, insert, update} from './ContactsDB'

/*
const contacts = [
  { id: '1', nome: 'Larissa', tipo: 'Filha', telefone: '(31) 93333-3333' },
  { id: '2', nome: 'Kamilla', tipo: 'Filha', telefone: '(31) 94444-4444' },
];
*/

export default ({navigation, route}) => {
  const [contacts, setContacts] = useState([])
  const [visible, setVisible] = useState(false)
  const [id, setId] = useState(null)
  const [tipo, setTipo] = useState('')
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')


  useEffect(() => {
    initData()

  }, [])

  const initData = async () => {
    const contacts = await findAll()
    setContacts(contacts)
  }

  const remove = async (id) => {
    await removeById(id)
    await initData()

    alert('Contato excluido com sucesso.')
  }

  const salvar = async () => {

    if(id!=null){
      // Update
      const contato = {
        id: id,
        tipo: tipo,
        nome: nome,
        telefone: telefone
      }
      await update(contato)
      alert('Contato atualizado com sucesso!!!')
    } else{
      // Insert
      const novoContato = {
        tipo: tipo,
        nome: nome,
        telefone: telefone
      }
      await insert(novoContato)
      alert('Contato registrado com sucesso!!!')
    }

    setVisible(false)
    setId(null)
    setNome('')
    setTipo('')
    setTelefone('')

    await initData()
  } 

  const edit = (contato) => {
    setVisible(true) // Habilitando a tela de edit
    setId(contato.id) // id já não vai ser mais nulo
    setTipo(contato.tipo) // alterando os campos para os dados do contato 
    setNome(contato.nome)
    setTelefone(contato.telefone)
  }

  const deactivateDialog = () => {
    setVisible(false)
    setId(null)
    setNome('')
    setTipo('')
    setTelefone('')
  }
  const activateDialog = () => {
    setVisible(true)
  }


  return (

    <>
      <ScrollView>
        <FlatList
          data={contacts}
          renderItem={({ item }) => 
            <TouchableOpacity 
              onPress={() => navigation.navigate('sos', {...item})}
            >
              <Card 
                tipo={item.tipo}
                nome={item.nome}
                telefone={item.telefone}
                onDelete={() => remove(item.id) }
                onEdit={() => edit(item)}
              />
            </TouchableOpacity>
          }
          keyExtractor={(item) => item.id}
        />

        <Button onPress={activateDialog}>NOVO CONTATO</Button>
      </ScrollView>

      <Provider>
        <Portal>
          <Dialog visible={visible} onDismiss={deactivateDialog}>
            <Dialog.Title>Contatos</Dialog.Title>

            <Dialog.Content>
              <TextInput mode='outlined' label='Tipo' value={tipo} onChangeText={(text) => setTipo(text)}/>
              <TextInput mode='outlined' label='Nome' value={nome} onChangeText={(text) => setNome(text)}/>
              <TextInput mode='outlined' label='Telefone' keyboardType='phone-pad'  value={telefone} onChangeText={(text)  => setTelefone(text)}/>
            </Dialog.Content>

            <Dialog.Actions>
              <Button onPress={deactivateDialog}>Cancelar</Button>
              <Button onPress={salvar}>Salvar</Button>
            </Dialog.Actions>


          </Dialog>
        </Portal>
      </Provider>

    </>
  )
}
