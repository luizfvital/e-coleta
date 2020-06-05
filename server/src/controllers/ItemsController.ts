import { Request, Response } from 'express'
import connection from '../database/connection'

class ItemsController {
  async index(req: Request, res: Response) {
    const items = await connection('items').select('*')

    const serializedItems = items.map((item) => ({
      ...item,
      imageURL: `http://localhost:3333/uploads/${item.image}`,
    }))

    return res.json(serializedItems)
  }
}

export default ItemsController
