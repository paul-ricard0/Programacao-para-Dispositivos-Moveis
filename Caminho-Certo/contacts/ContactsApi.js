

const ra = '12109624' 

export async function findAll() {
  const options = {
    method: 'GET',
    headers: {
      Authorization : ra,
      'Content-Type': 'application/json'
    }
  }

  const httpResponse = await fetch('https://contacts-api.tarleylana.repl.co/contacts', options)
  const responseBody = await httpResponse.json()

  return responseBody.data
}

export async function insert(contact) {
  const options = {
    method: 'POST',
    headers: {
      Authorization : ra,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(contact)
  }

  const httpResponse = await fetch('https://contacts-api.tarleylana.repl.co/contacts', options)
  const responseBody = await httpResponse.json()

  return responseBody.data
}

export async function update(contact) {
  const options = {
    method: 'PUT',
    headers: {
      Authorization : ra,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(contact)
  }

  const httpResponse = await fetch('https://contacts-api.tarleylana.repl.co/contacts/' + contact.id, options)
  const responseBody = await httpResponse.json()

  return responseBody.data
}

export async function removeById(id) {
  const options = {
    method: 'DELETE',
    headers: {
      Authorization : ra,
      'Content-Type': 'application/json'
    }
  }

  const httpResponse = await fetch('https://contacts-api.tarleylana.repl.co/contacts/' + id, options)
  const responseBody = await httpResponse.json()
  return responseBody.data
} 















