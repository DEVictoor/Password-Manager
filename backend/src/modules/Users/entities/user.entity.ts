import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Person } from "../../Person/entities/person.entity";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ default: 0, nullable: true })
  isSubscribed?: boolean;

  @OneToOne(() => Person, (p) => p.user)
  @JoinColumn()
  person: Person;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;
}
