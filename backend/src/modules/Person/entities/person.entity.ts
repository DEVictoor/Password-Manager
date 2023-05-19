import { Column, CreateDateColumn, Entity, IsNull, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { User } from "../../Users/entities/user.entity";

@Entity()
export class Person {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  @Unique()
  email: string;

  @Column()
  address?: string;

  @OneToOne(() => User, (user) => user.person)
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
