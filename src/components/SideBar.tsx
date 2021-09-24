import { Button } from './Button';
import { Header } from './Header';

interface Genre {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  genres: Genre[];
  selectedGenreId: number;
  onSetSelectedGenreId: (id: number) => void;
}

export function SideBar({
  genres,
  onSetSelectedGenreId,
  selectedGenreId,
}: SideBarProps) {
  return (
    <Header>
      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onSetSelectedGenreId(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </Header>
  );
}
