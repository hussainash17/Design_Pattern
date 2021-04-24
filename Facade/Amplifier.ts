import { Tuner } from './Tuner';
import { CdPlayer } from './cdPlayer';
import { DvdPlayer } from './dvdPlayer';

export class Amplifier {
  private readonly description: string;
  private dvd: DvdPlayer;
  private cd: CdPlayer;
  private tuner: Tuner;

  constructor(description: string) {
    this.description = description;
  }
  public on(): void {
    console.log(this.description + ' on');
  }

  public off(): void {
    console.log(this.description + ' off');
  }

  public setStereoSound(): void {
    console.log(this.description + ' stereo mode on');
  }

  public setSurroundSound(): void {
    console.log(
      this.description + ' surround sound on (5 speakers, 1 subwoofer)'
    );
  }

  public setVolume(level: number): void {
    console.log(this.description + ' setting volume to ' + level);
  }

  public setTuner(tuner: Tuner): void {
    console.log(this.description + ' setting tuner to ' + this.dvd);
    this.tuner = tuner;
  }

  public setDvd(dvd: DvdPlayer): void {
    console.log(this.description + ' setting DVD player to ' + this.dvd);
    this.dvd = dvd;
  }

  public setCd(cd: CdPlayer): void {
    console.log(this.description + ' setting CD player to ' + this.cd);
    this.cd = cd;
  }

  public toString(): string {
    return this.description;
  }
}
