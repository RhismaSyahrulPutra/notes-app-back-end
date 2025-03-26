const { nanoid } = require('nanoid')
const notes = require('./notes')

const createResponse = (h, status, message, data = null, code = 200) => {
  const response = h.response({ status, message, ...(data && { data }) })
  response.code(code)
  return response
}

const addNoteHandler = (request, h) => {
  const { title, tags, body } = request.payload
  const id = nanoid(16)
  const createdAt = new Date().toISOString()

  const newNote = { title, tags, body, id, createdAt, updatedAt: createdAt }
  notes.push(newNote)

  return notes.some((note) => note.id === id)
    ? createResponse(
        h,
        'success',
        'Catatan berhasil ditambahkan',
        { noteId: id },
        201,
      )
    : createResponse(h, 'fail', 'Catatan gagal ditambahkan', null, 500)
}

const getAllNotesHandler = () => ({
  status: 'success',
  data: { notes },
})

const getNoteByIdHandler = (request, h) => {
  const note = notes.find((n) => n.id === request.params.id)
  return note
    ? createResponse(h, 'success', null, { note })
    : createResponse(h, 'fail', 'Catatan tidak ditemukan', null, 404)
}

const editNoteByIdHandler = (request, h) => {
  const { id } = request.params
  const index = notes.findIndex((note) => note.id === id)

  if (index === -1) {
    return createResponse(
      h,
      'fail',
      'Gagal memperbarui catatan. Id tidak ditemukan',
      null,
      404,
    )
  }

  notes[index] = {
    ...notes[index],
    ...request.payload,
    updatedAt: new Date().toISOString(),
  }
  return createResponse(h, 'success', 'Catatan berhasil diperbarui')
}

const deleteNoteByIdHandler = (request, h) => {
  const index = notes.findIndex((note) => note.id === request.params.id)

  if (index === -1) {
    return createResponse(
      h,
      'fail',
      'Catatan gagal dihapus. Id tidak ditemukan',
      null,
      404,
    )
  }

  notes.splice(index, 1)
  return createResponse(h, 'success', 'Catatan berhasil dihapus')
}

module.exports = {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler,
}
