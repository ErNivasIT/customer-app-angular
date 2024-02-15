export class orderviewmodel
{
      id !:number
      qty!  :number
      amount! :number 
      order_Date!  :string
      order_Placed_By! :string
      constructor()
      {
         this.id=0
         this.qty=0
         this.amount=0
         this.order_Date=''
         this.order_Placed_By=''
      }
}