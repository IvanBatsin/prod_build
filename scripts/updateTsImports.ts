import { Project } from "ts-morph";

const project = new Project({});

project.addSourceFilesAtPaths("src/**/*.ts");
project.addSourceFilesAtPaths("src/**/*.tsx");

const files = project.getSourceFiles();

const isAbsoluteImport = (path: string): boolean => {
  const layers = ["app", "shared", "features", "widgets", "pages", "entities"];
  return layers.some(layer => path.startsWith(layer));
}

files.forEach(sourceFile => {
  const importDeclarations = sourceFile.getImportDeclarations();
  importDeclarations.forEach(declaration => {
    const value = declaration.getModuleSpecifierValue();
    if (isAbsoluteImport(value)) {
      declaration.setModuleSpecifier(`@/${value}`);
    }
  });
});

project.save();