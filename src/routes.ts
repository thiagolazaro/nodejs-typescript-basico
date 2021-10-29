import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {

  CreateCourseService.execute({
    name: "NodeJS",
    educator: "Thiago",
    duration: 10
  });

  CreateCourseService.execute({
    name: "React Native",
    educator: "Thiago Lázaro",
    // duration: 10
  });

  return response.send();
}