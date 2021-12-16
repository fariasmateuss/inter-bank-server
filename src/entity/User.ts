import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column()
  accountNumber: number

  @Column()
  accountDigit: number

  @Column()
  wallet: number

  @Column()
  email: string

  @Column()
  password: string
}

export default User
