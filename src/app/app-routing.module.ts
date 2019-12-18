import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MyBarChartComponent } from "./my-bar-chart/my-bar-chart.component";
import { ChartsModule } from "ng2-charts";

const routes: Routes = [
  { path: "my-bar-chart", component: MyBarChartComponent },
  { path: "", component: MyBarChartComponent }

  // { path: "bar-chart", component: MyBarChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ChartsModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
