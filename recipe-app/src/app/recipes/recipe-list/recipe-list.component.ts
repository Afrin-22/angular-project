import { Component, OnInit } from '@angular/core';
import {Recipe} from "./recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Shoyu Ramen", "based on soy sauce", "https://fitfoodiefinds.com/wp-content/uploads/2021/03/ramen-12sq.jpg"),
    new Recipe("Miso Ramen", "based on miso soup", "https://steamykitchen.com/wp-content/uploads/2011/04/miso-ramen-recipe-feature-20912.jpg"),
    new Recipe("Chicken Ramen", "based on chicken broth", "https://www.halfbakedharvest.com/wp-content/uploads/2021/10/Easy-Ginger-Chicken-and-Spinach-Ramen-1.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
