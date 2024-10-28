export type SallingResponse = Array<{
    clearances: Array<{
      offer: {
        currency: string
        discount: number
        ean: string
        endTime: string
        lastUpdate: string
        newPrice: number
        originalPrice: number
        percentDiscount: number
        startTime: string
        stock: number
        stockUnit: string
      }
      product: {
        categories?: {
          da?: string
          en?: string
        }
        description: string
        ean: string
        image?: string
      }
    }>
    store: {
      id: string
      address: {
        city: string
        country: string
        extra: any
        street: string
        zip: string
      }
      brand: string
      coordinates: Array<number>
      hours: Array<{
        date: string
        type: string
        open: string
        close: string
        closed: boolean
        customerFlow: Array<number>
      }>
      name: string
      type: string
    }
  }>
  