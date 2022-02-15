import { Grid } from "../../../ZUI";

export const GridContent = () => {
  const grid1 = [];

  for (let index = 1; index < 13; index++) {
    grid1.push(index);
  }

  return (
    <section>
      <h2 id="gridWidget">Grid</h2>
      <section>
        <Grid.Container gap=".5rem">
          {grid1.map(elem => 
            <Grid.Item xs={1} key={elem} style={{backgroundColor: "blue", height: "1rem", textAlign: "center"}}>
              <span>{elem}</span>  
            </Grid.Item>
          )}
        </Grid.Container>
        <Grid.Container gap=".5rem">
          <Grid.Item xs={6} style={{backgroundColor: "blue", height: "1rem", textAlign: "center"}}>
            <span>1</span>  
          </Grid.Item>
          <Grid.Item xs={6} style={{backgroundColor: "blue", height: "1rem", textAlign: "center"}}>
            <span>1</span>  
          </Grid.Item>
          <Grid.Item xs={1} style={{backgroundColor: "blue", height: "1rem", textAlign: "center"}}>
            <span>1</span>  
          </Grid.Item>
        </Grid.Container>
      </section>
    </section>
  )
}